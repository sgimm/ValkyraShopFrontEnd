class RestHelper {
    constructor(url, Method) {
        this.ClassName = "RestClass";
        this._http = new XMLHttpRequest();
        this._url = url;
        this._method = Method;
    }
    Request(data, callback, token) {
        this._http.open(this._method, this._url, true);
        this._http.responseType = "json";
		//this._http.withCredentials = true;
		if(this._method !== "GET")
			this._http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		if(token)
			this._http.setRequestHeader("Authorization", token);
        this._http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
                if (callback)
                    callback(this.response);
        }
        this._http.send(data);
    };
    RequestFile(data, callback) {
        this._http = new XMLHttpRequest();
        this._http.open(this._method, this._url, true);
        this._http.onreadystatechange = x => {
            if (this._http.readyState == 4 && this._http.status == 200)
                callback(this._http.response);
        }
        if (this._method === 'POST' || this._method === 'PUT')
            this._http.send(JSON.stringify(data));
        this._http.send(data);
    }
}