import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


  
function Article(probs){
  return <article>
    <h2>{probs.title}</h2>
    {probs.body}
  </article>
}

function Header(probs){
  console.log('probs : ', probs.title);
  return <header>
    <h1><a href = "/" onClick={(event)=>{
      event.preventDefault();
      probs.onChangeMode();
    }}>{probs.title}</a></h1>
  </header>
}


function Nav(probs){
  
  const lis = []
  for(let i = 0 ; i<probs.topics.length;i++){
    let t = probs.topics[i];
    lis.push(<li key={t.id}><a id = {t.id} href ={"/read/"+t.id} onClick = {(event)=>{
      event.preventDefault();
      probs.onChangeMode(event.target.id);
    }}>{t.title}</a></li>)
  }return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

  
function App() {
  const _mode = useState('WELCOME');
  const mode = _mode[0];
  const setMode = _mode[1];
  console.log('_mode',_mode);
  const topics = [
    {id: 1, title: 'html', body : 'HTML is ...'},
    {id: 2, title: 'css', body : 'CSS is ...'},
    {id: 3, title: 'js', body : 'JAVA-script is ...'}
  ]
  let content = null;
  if(mode ==='WELCOME'){
    content = <Article title = "Welcome" body = "Hello WEB"></Article>
  }
  else if(mode === 'READ'){
    content = <Article title = "Read" body = "Hello, Read"></Article>
  }
  return (
    <div>
      <Header title = "REACT" onChangeMode={()=>{
        mode = 'WELCOME';
      }}></Header>
      <Nav topics = {topics}onChangeMode={(id)=>{
        mode = "READ";
      }}></Nav>
      <Article title = "Welcome" body = "Hello WEB"></Article>
    </div>
  );
}

export default App;
