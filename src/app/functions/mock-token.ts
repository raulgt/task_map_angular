
 const base64UrlEncode = (str: string): string => {
         return btoa(str)
         .replace(/=/g, '')
         .replace(/\+/g, '-')
         .replace(/\//g, '_');
}
    
const  createMockJWT = (payload: object): string =>  {
    const header = {
    alg: 'none',
    typ: 'JWT'
    };
    
    const headerEncoded = base64UrlEncode(JSON.stringify(header));
    const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
    
    // Since we're not using a real signature, we'll just use an empty string
    const signature = '';
    
    return `${headerEncoded}.${payloadEncoded}.${signature}`;
}

export{
    createMockJWT as default
}