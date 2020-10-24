import styled from 'styled-components';

export const MusicActiorsWrapper = styled.div`
    padding:0 20px;
    width:250px;
    height:455px;
    box-sizing:border-box;
`


export const MusicActiorsHeader = styled.div`
    display:flex;
    justify-content:space-between;
    margin:10px 0;
    height:24px;
    border-bottom: 1px solid #ccc;

    .title{
        color:#333;
        font-weight: bold;
    }
`
export const MusicActiorsContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    height:380px;

    .musician-item{
        display:flex;
        width:208px;
        height:62px;
        border:1px solid #e9e9e9;
        background-color:#fafafa;
        cursor: pointer;

        &:hover{
            background-color: #eee;
        }

        .text{
            display:flex;
            padding-left:10px;
            flex-direction:column;
            justify-content:space-evenly;
            width:150px;

            .name{
                font-weight:700;
                color:#333;
            }
        }
    }
`

export const MusicActiorsFooter = styled.div`
    height:31px;

    .default-btn{
        display: inline-block;
        margin-top:10px;
        padding: 0 40px;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        border:1px solid #ccc;
        border-radius:4px;
        font-size:14px;
        font-weight:700;
        color:#333;
        cursor: pointer;

        a{
            text-decoration:none;
        }

        &:hover{
            background-color: #eee;
        }
    }
`