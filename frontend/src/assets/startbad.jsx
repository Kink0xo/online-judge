import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Start() {
    const navigate = useNavigate();
    navigate('/login');
    return;
}

export default Start;
