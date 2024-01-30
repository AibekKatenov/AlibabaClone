
<template>
    Dias
    <footer class="footer">
      <div class="container">
          <div class="footer-menu">
            <ul>
                <li><a href="#">AliExpress</a></li>
                <li><a href="#">1688.com</a></li>
                <li><a href="#">Tmall Taobao World</a></li>
                <li><a href="#">Alipay</a></li>
                <li><a href="#">Lazada</a></li>
                <li><a href="#">Taobao Global</a></li>
            </ul>
          </div>
          <div class="footer-policies">
            <ul>
                <li><a href="#">Policies and rules</a></li>
                <li><a href="#">Legal Notice</a></li>
                <li><a href="#">Product Listing Policy</a></li>
                <li><a href="#">Intellectual Property Protection</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Integrity Compliance</a></li>
            </ul>
          </div>
            <div class="footer-bottom">
                <p>© 1999-2024 Alibaba.com. All rights reserved.</p>
                <!-- <img class = "beian" src = "src=https://img.alicdn.com/tfs/TB1QhYprKT2gK0jSZFvXXXnFXXa-20-20.png"> -->
                <p>浙公网安备 33010002000092号</p>
                <p>浙B2-20120091-4</p>
            </div>
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f8f8;
    padding: 20px 0;
    color: #333;
    text-align: center;
  }
  
  .footer a {
    color: #333;
  }
  
  .footer-policies a:hover,
  .footer a:hover {
    color: #ec1c24;
    text-decoration: underline;
  }

  .footer-policies,
  .footer-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-policies li,
  .footer-menu li {
    display: inline-block;
    margin-right: 10px;
  }

  .footer-policies a,
  .footer-menu a {
    color: #333;
    text-decoration: none;
  }

  .footer-menu li:not(:last-child):after{
    content: " | ";
    color: #999;
  }

  .footer-policies li:not(:last-child):after{
    content: " • "; 
    color: #999;
  } 

  .footer-bottom {
    margin-top: 20px;
    text-align: center;
  }

  .footer-bottom {
    margin: 5px 0;
  }

  .footer-menu,
  .footer-bottom,
  .footer-policies {
    display: flex;
    justify-content: center;
    align-items: center;
 }
  </style>