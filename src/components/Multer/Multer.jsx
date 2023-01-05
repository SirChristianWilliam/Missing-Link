import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

function Upload() {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState('');
    const user = useSelector((store) => store.user);
    const multerReducer = useSelector((store) => store.multerReducer);
    const handleUpload = (event) => {
        event.preventDefault();
        console.log('in handleUpload Multer',selectedFile);
        dispatch({
            type: `UPLOAD_IMAGE`,
            payload: selectedFile,
        })
    }

const myTimeout = setTimeout(holdup, 3000);

function holdup() {
    document.getElementById('submitProfilePic').classList.add('firstHidden')
}

    const changeHandler = (event) => {

        console.log('in changeHandler Multer',event.target.files);
        setSelectedFile(event.target.files);
        document.getElementById('submitProfilePic').classList.remove('firstHidden');
    }
    console.log('in upload Multer');
    return (
        <>           
        <form 
            method="post" 
            encType="multipart/form-data"
            action="/profile"
            onSubmit={handleUpload}
        >
            <input 
                type="file" 
                id="imgupload" 
                className="hideInput form-control-file" 
                name="uploaded_file"
                onChange={changeHandler}
            />
            <label for='imgupload'>
                <img
                    type="submit"
                    id="myimage"
                    src={user.profile_pic}
                    label for='imgupload'
                    className="ppic"
                >
                </img>
            </label>
            <Button 
                onClick={myTimeout}
                type="submit"
                value="Upload Profile Pic"
                className='buttonHover firstHidden'
                id="submitProfilePic"
                    variant="contained"
                    size='small'
                        sx={{
                            bgcolor: '#5bc0a7',
                            marginTop:'20px'
                        }}
            >
            Confirm Changes
            </Button>
        </form>
        </>
    )
}

export default Upload;