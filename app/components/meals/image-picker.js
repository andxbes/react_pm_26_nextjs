'use client'
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const [pickerImage, setPickerImage] = useState();
    const imageInput = useRef();
    function handlePick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            setPickerImage(fileReader.result);
        };
    }

    return (
        <div className={classes.picker}>
            <label htmlFor="image">
                {label}
            </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickerImage && <p>No image picker yet.</p>}
                    {pickerImage && <Image src={pickerImage} alt="The image selected by the user." fill />}
                </div>
                <input
                    type="file"
                    id="image"
                    accept="image/jpeg, image/jpg, image/png"
                    name={name}
                    className={classes.input}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button className={classes.button} onClick={handlePick} type="button">
                    Pick an Image
                </button>
            </div>
        </div>
    );
};
