import React, { Component, useEffect, useState } from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.less'

function MdEditor(props) {
  return (
    <ReactQuill
      theme='snow'
      value={props.value}
      onChange={props.onChange}
      height='450'
    />)
}

export default MdEditor
