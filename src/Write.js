import React, { useState} from 'react';
import Editor from './Editor';
import ajax from 'ajax';
import UploadFiles from './UploadFiles';
import Select from 'react-select';
import { Link } from "react-router-dom";
import Header from "./Header";

import "./Write.css";


const Write = () => {

  const tabs = [
    { value: '공지사항', text: '공지사항' },
    { value: '주문', text: '주문' },
    { value: '배송', text: '배송'},
 ]

const [id, setId] = useState(0);
const [title, setTitle] = useState('');
const [desc, setDesc] = useState('');
const [type, setType] = useState('공지사항');
const uploadReferenece = React.createRef();

    
async function onClickSearch() {

    if (title.trim() == '') {
        alert('제목을 입력해주세요'); return;
    }

    if (desc.trim() == '') {
        alert('내용을 입력해주세요'); return;
    }

    await uploadReferenece.current.upload().then(function (result) {

        const files = result;


        ajax('/api/notice/saveNotice', { title: title, desc: desc, type: type, files: files }, (res) => {
            if (res.data && res.data.ok === 1) {
                alert('저장 완료');
                setId(res.data.insertedId);
                var linkToClick = document.getElementById('notice_Detail_Link');
                linkToClick.click();
            } else {
                alert('오류.')
            }
        }, null, true); 

    }).catch(function (err) {

    });

}



function onEditorChange(value) {
  setDesc(value)
}



    return (

      <div className={Header}>
      <Header/>
    

         <div className="write_container" style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
        
            <div className="lf-contents pd12">
                <div className="top-controls2">
                    <a href="/boardList"><button className="lf-button primary float-right">목록</button></a>
                    
                </div>

                <div className="writePage">
                  
                    <div className="form-group">
                    <Select options={tabs} onChange={(event) => setType(event.target.value)}/> 
                    </div>
                    <div className="form-group">
                    <input type="text" placeholder="제목" className="form-control" onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <UploadFiles ref={uploadReferenece} />
                    <Editor value={desc} onChange={onEditorChange} />

                    <div className="text-center pd12">
                        <button className="lf-button-primary" onClick={onClickSearch}>저장</button>
                        <Link id="notice_Detail_Link" to={{ pathname: '/writeDetail', state: { _id: id } }}></Link>
                    </div>
                   
                </div>
            </div>
        </div>

        </div>
    )
};


export default Write;
 