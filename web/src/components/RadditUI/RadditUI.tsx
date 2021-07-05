import React, { useEffect, useState } from 'react';
import { ObterPosts } from '../../service/ObterPosts';
import { Container } from './styles';
import retanguloImg from '../../assets/Rectangle 3.svg'
import { IPost } from '../../interface/IPost';


interface props {
  _ObterPosts: ObterPosts
}
const RadditUI = ({ _ObterPosts }: props) => {
  enum ButtunsSelect {
    Hot,
    News,
    Rising
  }
  const [botaoAtivo, setBotaoAtivo] = useState(0);
  const [hotPosts, setHotPosts] = useState<IPost[]>([{}]);
  const [newPosts, setNewPosts] = useState<IPost[]>([{}]);
  const [risingPosts, setRisingsPosts] = useState<IPost[]>([{}]);
  const [storeView, setStoreView] = useState<IPost[]>([{}])
  const [afterHot,setAfterHot] = useState<string>('')
  const [afterNew,setAfterNew] = useState<string>('')
  const [afterRisings,setAfterRisings] = useState<string>('')
  const limit=1;
  useEffect(() => {
    _ObterPosts.hot('',limit).then(data => { 
      setHotPosts(data.Posts); 
      setStoreView(data.Posts); 
      setAfterHot(data.after)
    });
    _ObterPosts.news('',limit).then(data => {
      setNewPosts(data.Posts);
      setAfterNew(data.after);
    });
    _ObterPosts.risings('',limit).then(data =>{
      setRisingsPosts(data.Posts);
      setAfterRisings(data.after);
    });

  }, [_ObterPosts])
  const handleVerMais = ()=>{
    window.scrollTo(0,document.body.scrollHeight);
    if (botaoAtivo === ButtunsSelect.Hot) {
      _ObterPosts.hot(afterHot,limit,hotPosts.length).then(data => {
         setHotPosts([...hotPosts,...data.Posts]); 
         setAfterHot(data.after)
         setStoreView([...storeView,...data.Posts])
         window.scrollTo(0,document.body.scrollHeight);
        }).catch(x=>x)
        window.scrollTo(0,document.body.scrollHeight);
    }
    if (botaoAtivo === ButtunsSelect.News) {
      _ObterPosts.news(afterNew,limit,newPosts.length).then(data => {
         setNewPosts([...newPosts,...data.Posts]); 
         setAfterNew( data.after);
         setStoreView([...storeView,...data.Posts])
         window.scrollTo(0,document.body.scrollHeight);
        }).catch(x=>x)
         window.scrollTo(0,document.body.scrollHeight)
    }
    if (botaoAtivo === ButtunsSelect.Rising) {
      _ObterPosts.risings(afterRisings,limit,risingPosts.length).then(data => { 
        setRisingsPosts([...risingPosts,...data.Posts]); 
        setAfterRisings(data.after)
        setStoreView([...storeView,...data.Posts]) 
        window.scrollTo(0,document.body.scrollHeight);
      }).catch(x=>x)
        window.scrollTo(0,document.body.scrollHeight);
    }
  }
  const handleClick = (botao: number): void => {
    setBotaoAtivo(botao)
    if (botao === ButtunsSelect.Hot) {
      setStoreView(hotPosts);
    }
    if (botao === ButtunsSelect.News) {
      setStoreView(newPosts);
    }
    if (botao === ButtunsSelect.Rising) {
      setStoreView(risingPosts);
    }
  }
  return <Container>
    <div>
      <div className='nv-ctn-btn'>
        <button className={botaoAtivo === ButtunsSelect.Hot ? 'bt-activad' : 'bt-deactivad'}
          onClick={e => handleClick(ButtunsSelect.Hot)}
        >
          Hot
        </button>
        <button className={botaoAtivo === ButtunsSelect.News ? 'bt-activad' : 'bt-deactivad'}
          onClick={e => handleClick(ButtunsSelect.News)}
        >
          News
        </button>
        <button className={botaoAtivo === ButtunsSelect.Rising ? 'bt-activad' : 'bt-deactivad'}
          onClick={e => handleClick(ButtunsSelect.Rising)}
        >
          Rising
        </button>
      </div>
    </div>
    <div className='dody-data-container'>
      <table>
        <tbody>
          {storeView?.length > 0 ? storeView.map((x, index) =>
            <tr key={index}>
              <td className='td-image'>
                <img className='image-usuario' src={retanguloImg} alt='info post aleatoria'></img>
              </td>
              <td>
                <div className='datainfo-container'>
                  <h1 className='h1-titulo'>
                    {x.titulo}
                  </h1>
                  <label className='label-timestamp'> {" enviado " + x?.timestampDescricao + " por "}
                    <span className='span-usuario'>{x?.autor}</span>
                  </label>
                  <label className='label-dominio'>{x?.dominio}</label>
                </div>
              </td>
            </tr>) : ''}
        </tbody>
      </table> 
    </div>
    <div className="next-data-container"
      onClick={e=>handleVerMais()}
    >
       <label> + ver mais</label>
      </div>
  </Container>
}

export default RadditUI;