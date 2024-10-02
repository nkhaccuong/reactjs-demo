import { Button, Drawer } from 'antd';
import { useState } from 'react';


const DetailUserModal = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
    console.log("dataDetail: ", dataDetail);
    const URL_BACKEND = "http://localhost:8080";

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnChange = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }
    console.log("Preview: ", preview);




    return (
        <Drawer title="Detail User" onClose={() => {
            setDataDetail(null);
            setIsDetailOpen(false);
        }}
            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>id: {dataDetail._id}</p>
                <br />
                <p>FullName: {dataDetail.fullName}</p>
                <br />
                <p>Email: {dataDetail.email}</p>
                <br />
                <p>Phone: {dataDetail.phone}</p>
                <br />
                <p>Avatar:</p>
                <div>
                    <img height={100} width={150}
                        src={`${URL_BACKEND}/images/avatar/${dataDetail.avatar}`} />
                </div>
                <div>
                    <label htmlFor='btnUpload' style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        Upload Avatar
                    </label>
                    <input type='file' hidden id='btnUpload' onChange={(event) => { handleOnChange(event) }} />
                </div>
                {preview &&
                    <div>
                        <img height={100} width={150}
                            src={preview} />
                    </div>
                }


            </>
                :
                <>
                    <p>Do not have any data</p>
                </>
            }
        </Drawer>
    )
}

export default DetailUserModal;