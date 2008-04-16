function strrev( string ){
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strrev('Kevin van Zonneveld');
    // *     returns 1: 'dlevennoZ nav niveK'

    var ret = '', i = 0;

    for ( i = string.length-1; i >= 0; i-- ){
       ret += string.charAt(i);
    }

    return ret;
}