import { ZoomMtg } from "@zoomus/websdk";
import styled from "styled-components";
import { useEffect } from "react";
import crypto from "crypto"; // crypto comes with Node.js

function generateSignature(apiKey, apiSecret, meetingNumber, role) {
  return new Promise((res, rej) => {
    // Prevent time sync issue between client signature generation and zoom
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString("base64");
    const hash = crypto.createHmac("sha256", apiSecret).update(msg).digest("base64");
    const signature = Buffer.from(
      `${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString("base64");

    res(signature);
  });
}

// // pass in your Zoom JWT API Key, Zoom JWT API Secret, Zoom Meeting Number, and 0 to join meeting or webinar or 1 to start meeting
// console.log(generateSignature(process.env.API_KEY, process.env.API_SECRET, 123456789, 0));

const signatureEndpoint = "http://localhost:4000";
const apiKey = "2YTAXK8uS_q-WJoq5TRIXA";
const apiSecret = "QIcc910ohayNAtLMkTUo2wvoQwfzpombnaCT";
const meetingNumber = 99483670329;
const role = 1;
const leaveUrl = "http://localhost:3000";
const userName = "WebSDK";
const userEmail = "ravishukla86044@gmial.com";
const passWord = "5T9YQJ";
let signature = "";
generateSignature(apiKey, apiSecret, meetingNumber, role).then((res) => {
  signature = res;
});

export default function Zoom() {
  useEffect(() => {
    ZoomMtg.setZoomJSLib("node_modules/@zoomus/websdk/dist/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    startMeeting();
    displayOn();
  }, []);

  const displayOn = () => {
    document.getElementById("zmmtg-root").style.display = "block";
  };

  const startMeeting = () => {
    ZoomMtg.init({
      leaveUrl: leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  return <div className="zoom">Zoom</div>;
}
