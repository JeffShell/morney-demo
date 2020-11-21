let id: number = parseInt(window.localStorage.getItem('_index')||'0')||0;
function createId(){
  id++;
  window.localStorage.setItem('_inMax',id.toString());
  return id;
}
export default createId;