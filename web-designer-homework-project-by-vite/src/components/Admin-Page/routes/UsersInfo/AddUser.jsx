import React,{useState, useContext} from 'react'
import backendUrl from '../../../../apis/backend-url'
import  { Form, Input, Select, Button, Row, Col, Space, DatePicker, message} from 'antd';
import { UsersContext } from '../../../../context/UsersContext';
import '../../../FormPage/formpage.css'
import { useNavigate } from 'react-router-dom';



const AddUser = () => {
    const { addUsers } = useContext( UsersContext );
    let navigate = useNavigate();
  const [TenKhach, setTenKhach] = useState("");
  const [DienThoai, setDienThoai] = useState("");
  const [DiaChi, setDiaChi] = useState("");
  const [MaChuyen, setMaChuyen] = useState("");
  const [NgayDKy, setNgaydky] = useState("");
  const [STDTra, setStdtra] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await backendUrl.post("/", {
        TenKhach,
        DienThoai,
        DiaChi,
        MaChuyen,
        NgayDKy,
        STDTra
      });
      navigate("/admin/user");
      console.log(response.data.data);
      addUsers(response.data.data.user);
    } catch (err) {
      console.log(err);
    }
};
  return (
    <section className='createPostPage'>
    <div className='cpContainer grid'>
      <h1 data-aos="fade-up" className='sec-title-form'> PLEASE ENTER YOUR INFORMATION</h1>

      <Form className='inputGp grid'>

      <Form.Item className="input-item">
        <h3 className='third-title-form'><span>Personal Information</span></h3>

        <Row>
    <Col span={24}><Input 
    value={TenKhach}
            onChange={(e) => setTenKhach(e.target.value)}
            type="text"
    placeholder='Name...'
    />
    </Col>
  </Row>
  <Row>
    <Col span={24}><Input 
    value={STDTra}
            onChange={(e) => setStdtra(e.target.value)}
            type="text"
    placeholder='Money EXAMPLE: 100...'
    />
    </Col>
  </Row>
  <Row>
    <Col span={24}><Input 
          value={DienThoai}
            onChange={(e) => setDienThoai(e.target.value)}
            type="text"
    placeholder='Phone Number...'
    />
    </Col>
  </Row>          
  <Row>
    <Col span={24}><Input 
          value={DiaChi}
            onChange={(e) => setDiaChi(e.target.value)}
            type="text"
    placeholder='Address...'
    />
    </Col>
  </Row>
  {/* <Row>
    <Col span={24}><textarea 
          value={tenkhach}
            onChange={(e) => setTenTinhThanh(e.target.value)}
            type="text"
    className='form-note' placeholder='Note...'
    />
    </Col>
  </Row>   */}
      
        </Form.Item> 

        <Form.Item className="input-item">
          <h3 className='third-title-form'><span>Package Information</span></h3>
          <Row>
    <Col span={24}><Input 
          value={MaChuyen}
            onChange={(e) => setMaChuyen(e.target.value)}
            type="text"
    placeholder='Ma Chuyen...'
    />
    </Col>
  </Row>
          {/* <Row>
    <Col span={24}><Select
          value={MaChuyen}
            onChange={(e) => setMaChuyen(e.target.value)}
            type="text"
  showSearch
  className='Selected-packages'
  placeholder="Search your Package Information..."
  optionFilterProp="children"
  filterOption={(input, option) => (option?.label ?? '').includes(input)}
  filterSort={(optionA, optionB) =>
    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
  }
  options={[
    {
      value: '1',
      label: '2',
    },
    {
      value: '2',
      label: 'Closed',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
  ]}
/></Col>
  </Row> */}
  <Row>
    <Col span={24}><Input 
          value={NgayDKy}
            onChange={(e) => setNgaydky(e.target.value)}
            type="text"
    placeholder='Date Sign Form...' className='date-time' 
    />
    </Col>
  </Row>
</Form.Item> 
      <Space className='btn-gp flex'>
      <Button 
       onClick={handleSubmit} htmlType='submit' type='primary' className='btn'>ADD USER</Button>
        <Button className='btn'>RESET</Button>
      </Space>
      </Form>
    </div>
  </section>
  );
};
  


export default AddUser