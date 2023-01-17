function CusChoice(_type, _distance, _time) {
    this.type = _type;
    this.distance = _distance;
    this.time = _time;
    this.calPrice = function (){
        var type = this.type;
        var distance = this.distance;
        var price = '';
        if(type == 'uberX' && distance <= 20){
            price = 12000;
        }else if(type == 'uberX' && distance > 20){
            price = 10000
        }else if(type == 'uberSUV' && distance <= 20){
            price = 14000;
        }else if(type == 'uberSUV' && distance > 20){
            price = 12000;            
        }else if(type == 'uberBlack' && distance <= 20){
            price = 16000;
        }else if(type == 'uberBlack' && distance > 20){
            price = 14000;
        }else{
            price = 'invalid';
        }
        return price;
    };
    this.calTime = function (){
        var type = this.type;
        var waitPrice = '';
        if(type =='uberX'){
            waitPrice = 2000;
        }else if(type == 'uberSUV'){
            waitPrice = 3000;
        }else if(type == 'uberBlack'){
            waitPrice = 4000;
        }else{
            waitPrice = 'invalid';
        }
        return waitPrice;
    };
    this.first = function (){
        var type = this.type;
        var first1km = '';
        if(type =='uberX'){
            first1km = 8000;
        }else if(type == 'uberSUV'){
            first1km = 9000;
        }else if(type == 'uberBlack'){
            first1km = 10000;
        }
        return first1km;
    };
}

