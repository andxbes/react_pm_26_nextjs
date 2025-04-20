'use client'
import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const imageInput = useRef();
    function handlePick() {
        imageInput.current.click();
    }

    return (
        <div className={classes.picker}>
            <label htmlFor="image">
                {label}
            </label>
            <div className={classes.controls}>
                <input
                    type="file"
                    id="image"
                    accept="image/jpeg, image/jpg, image/png"
                    name={name}
                    className={classes.input}
                />
                <button className={classes.button} onClick={handlePick} type="button">
                    Pick an Image
                </button>
            </div>
        </div>
    );
};
