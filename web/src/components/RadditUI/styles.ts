import styled from 'styled-components';

export const Container = styled.div`
    grid-column:2/6;
    grid-row:2/2;
    width:100%;
    text-align:center;
  .bt-activad{
    width: 202px;
    height: 48px;
    background: var(--primary);
    border-radius: 8px;
  }
  .nv-ctn-btn{
    text-align:center;
    width: 100%;
    background-color: white;
    position: sticky;
    bottom: 0;
  }
  .nv-ctn-btn > button{
    margin:0.71%;
    font-size: 1.2em;
    color: white;
  }
  .bt-deactivad{
    width: 202px;
    height: 48px;
    background: var(--gray);
    border-radius: 8px;
  }
  .dody-data-container{
    margin-top: 20px;
    width:100%;
    text-align:left;
    border-style: dotted solid dashed double;
  }
  .datainfo-container{
    width:100%;
    margin-top:12px;
    margin-left: 13px;
    display: flex;
    align-items:baseline;
    flex-direction: column;
    align-content: center;
  }
  table{
    border-collapse: collapse;
  }
  table,tbody{
    display: table;  
    width:100%;
  }
  tbody{
    overflow-y: scroll;
    text-align: left;
  }

  tr{
    border-top: 1px solid #4C5667;
    display: table-row;
    vertical-align: middle;
    text-align:left;
    width:100% !important;
  }
  .td-image{
    width:77px;
  }
  
  .h1-titulo{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
  }
  .label-timestamp{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #4C5667;
  }
  .label-dominio{
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    margin-top: 9px;
    margin-bottom: 15px;
  }
  .span-usuario{
    color: var(--primary);
    margin-left: 4px;
  }
  .next-data-container{
    width: 100%;
    height: 48px;
    background: var(--primary);
    position: sticky;
    bottom: 10px;
    border-radius: 8px;
    text-align: center;
    color: #FFFFFF;
    display:flex;
    align-items:center  ;
    justify-content:center;
    align-items:center;
  }
  .next-data-container>label{
    margin-top: 0 auto;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
  .next-data-container:active {
  background-color: #922EE6;
  box-shadow: 0 5px #6319a0;
  transform: translateY(4px);
}
  .next-data-container:hover {background-color: #6319a0}
`;
