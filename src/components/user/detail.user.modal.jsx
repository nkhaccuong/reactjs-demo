import { Button, Drawer } from 'antd';


const DetailUserModal = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
    console.log("dataDetail: ", dataDetail);
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