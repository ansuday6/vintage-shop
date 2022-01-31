import React  from 'react';
import {MdAddShoppingCart} from 'react-icons/md';

import {BsPersonCircle, BsPencilSquare} from 'react-icons/bs';
import {AiOutlineShop} from 'react-icons/ai';





export const MenubarData = [
  {
    title: '장바구니',
    path: '/basket',
    icon: <MdAddShoppingCart />,
    cName: 'nav_text'
  },

  {
    title: '회원가입',
    path: '/register',
    icon: <BsPersonCircle />,
    cName: 'nav_text'
  },
  {
    title: 'Shop',
    path: '/shop',
    icon: <AiOutlineShop />,
    cName: 'nav_text'
  },
  {

    title: 'Q&A',
    path: '/boardList',
    icon: <BsPencilSquare />,
    cName: 'nav_text'
  },


];

