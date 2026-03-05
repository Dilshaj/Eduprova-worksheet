import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReportView() {
    const navigate = useNavigate();

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#3F5EFB",
                        color: "white",
                        cursor: "pointer"
                    }}
                >
                    ← Back to Dashboard
                </button>
            </div>

            <iframe
                src="http://40.192.76.174:8501/"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none"
                }}
                title="Project Report"
            />
        </div>
    );
}
