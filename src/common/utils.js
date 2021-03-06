// 防抖
export function debounce(func,delay) {
    let timer = null

    return function(...args){
      if(timer) {
        clearTimeout(timer)
      }else{
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    }
}