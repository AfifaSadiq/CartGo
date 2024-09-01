
import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './QRScanner.css';

const QRScanner = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear(); // Clears the scanner after a successful scan
            setScanResult(result);
        }

        function error(err) {
            console.warn(err);
        }

        // Cleanup function to stop the scanner when the component unmounts
        return () => {
            scanner.clear();
        };
    }, []); // Empty dependency array means this useEffect runs once when the component mounts

    return (
        <div className="QRCodeScanComp">
            <h1>QR Code Scanner</h1>
            <div id="reader"></div>
            {scanResult && (
                <div>
                    <h2>Scan Result:</h2>
                    <p>{scanResult}</p>
                </div>
            )}
        </div>
    );
};

export default QRScanner;
