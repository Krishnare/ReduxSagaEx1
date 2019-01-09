export const fetchData = async () =>{
    try{
        const response = await fetch('https://api.myjson.com/bins/uyl3y');
        const dataDetail = await response.json();
        return dataDetail;
    } catch (e) {
        console.log(e)
    }   
}