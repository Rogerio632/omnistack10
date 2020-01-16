import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 30px;

    @media(max-width: 1000px){
    flex-direction: column;

    main{
      margin-left: 0 !important;
      margin-top: 30px;
      width: fill-available;
      width: -webkit-fill-available;
      width: -moz-fill-available;
    }
    main ul{
      grid-template-columns: 1fr !important;
    }

    aside.main-aside{
      width: 100%;
    }
}

    /**
    * barra lateral de cadastro na aplicação
    */
   aside{
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;
}
aside strong{
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
}
aside form{
  margin-top: 30px;
}
aside form .input-block label{
  color: #ACACAC;
  font-size: 14px;
  font-weight: bold;
  display: block;
}
aside form .input-block + .input-block{
margin-top:20px;
}
aside form .input-group{
margin-top: 20px;
display: grid;
gap: 20px;
grid-template-columns: 1fr 1fr;
}
aside form .input-group .input-block{
margin-top: 0;
}

aside form .input-block input {
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
  padding: 15px;
}
aside form button[type=submit]{
width: 100%;
border: 0;
margin-top: 30px;
background: #7d40e7;
border-radius: 2px;
padding: 15px 20px;
font-size: 16px;
font-weight: bold;
color: #fff;
cursor: pointer;

}
aside form button[type=submit]:hover{
background: #6931ca;
transition: background 0.5;
}


    /**
    * Conteúdo principal da aplicação
    */
    main {
  flex: 1;
  margin-left: 30px;
}
main ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
}
li.dev-item{
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
}
li.dev-item header{
  display: flex;
  flex-direction: row;
  align-items: center;
}
li.dev-item header img{
  width: 54px;
  height: 54px;
  border-radius: 50%;
}
li.dev-item header .user-info{
  margin-left: 10px;
}
.user-info strong{
  display: block;
  font-size: 16px;
  color: #333;
}
.user-info span{
  font-size: 13px;
  color: #999;
  margin-top: 2px;
}
li.dev-item p{
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
}
li.dev-item a{
  color: #8e4dff;
  font-size: 14px;
  text-decoration: none;
  transition: all .5;
}
li.dev-item a:hover{
  color: #5a2ea6;
}




`;

