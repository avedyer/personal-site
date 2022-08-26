export default function Navigator(props) {
  return(
    <div className='frame' id='navigator' style={{top: props.frame * document.body.offsetHeight}}>
      {props.frame > 0 ?
      <div className='scroller' onClick={() => props.passFrame(props.frame - 1)}>⬆</div>
      :
      <div />
      }
      {props.frame < 3 ?
      <div className='scroller' onClick={() => props.passFrame(props.frame + 1)}>⬇</div>
      :
      <div />
      }
    </div>
  )
}