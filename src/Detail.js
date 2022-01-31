import { useParams, useHistory } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import './Detail.css';
import { useDispatch } from "react-redux";
function Detail(props) {
  let { id } = useParams();
  let foundObj = props.shoes.find((obj) => {
    return obj.id == id;
  });
  console.log(foundObj);
  let history = useHistory();
  let [tabIdx, setTabIdx] = useState(0);
  let [transSw, setTransSw] = useState(false);
  let dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={foundObj.image} alt="이미지" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{foundObj.title}</h4>
          <p>{foundObj.name}</p>
          <p>{foundObj.content}</p>
          <p>{foundObj.price}</p>
          <a class="btn btn-primary" role="button" onClick={() => {
            dispatch({
              type: 'addObj',
              data: {
                id: foundObj.id,
                title: foundObj.title,
                name: foundObj.name,
                content: foundObj.content,
                price: foundObj.price,
                image: foundObj.image,
                qty: foundObj.qty
              }
            });
          }}>장바구니</a>
          &nbsp;
          <a class="btn btn-secondary" role="button" onClick={() => {
            history.goBack();
          }}>뒤로가기</a>
        </div>
        {/* tab menu */}
        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={() => {
              setTransSw(false);
              setTabIdx(0);
            }}>TAB 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => {
              setTransSw(false);
              setTabIdx(1);
            }}>TAB 2</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* tab content */}
        <CSSTransition in={transSw} classNames="trans" timeout={200}>
          <TabContent tabIdx={tabIdx} setTransSw={setTransSw} />
        </CSSTransition>
      </div>
    </div>
  )
}

function TabContent(props) {
  useEffect(() => {
    props.setTransSw(true);
  });
  return (
    <>
      <div>{props.tabIdx} 번째 탭 선택됨</div>
    </>
  )
}

export default Detail;