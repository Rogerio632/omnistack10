import styled from 'styled-components';

export const Container = styled.div`
  
  #app{
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
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
`;

