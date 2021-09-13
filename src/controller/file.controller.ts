export default class File{

    get(req, res){
        console.log('file::get')
        res.send('get a file');
    }
}