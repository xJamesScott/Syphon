import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'

function login() {
    const onSubmit = async (formData) => {
        try {
            const res = await axios.post("/api/auth/auth", { mode: "login", data: { "email": "jscizzle22@gmail.com" } });
        } catch {
            return error
        }
    }

    return (
        <div>
            <form action="">
                <input type="email" name="email" placeholder="email" id="" />
                <input type="text" name="password" placeholder="password" id="" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default login
