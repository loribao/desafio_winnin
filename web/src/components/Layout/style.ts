import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 51px auto auto auto auto 51px;
  grid-template-rows: 91px auto 91px;
  grid-gap:11px 0px;
  height: 100%;
  min-height:300px;
  max-height:100%;
  width:100%;
  background-color: white;
  @media (max-width: 400px)
{
  zoom: 75%;

}
@media (max-width: 305px)
{
  zoom: 65%;

}
@media (max-width: 266px)
{
  zoom: 50%;
  *,table>*{
    font-size:1.0em;
  }
}
`;