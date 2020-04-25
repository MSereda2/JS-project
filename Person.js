class Person extends Component {
    constructor(name) {
        super();
        this.name = name;
        this._happiness = 0;
        this._valueElement = document.querySelector(`.column__value-name`);
        this._iconElement = document.querySelector(`.column__value-icon`);
    }

    hasCat() {
        return this._happiness++;
    }

    hasRest() {
        return this._happiness++;
    }

    hasMoney() {
        return this._happiness++;
    }

    isSunny() {
        const APIKey = '28c7d687accc7c75aabbc7fb71173feb';
        const city = 'Москва';
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

        return fetch(url)
            .then(res => res.json())
            .then((res) => {
              console.log(this._happiness);
                if (res.main.temp - 273 > 15) {
                    return this._happiness++;
                }
            });
      }
}

/*
### PROMISE:

Mistake: Don't handle errors

Why: Server can send response with status error and you don't have method that will be responsible for handle error.

Solution: Promise, which returns fetch (), goes into the rejected state only when a network error occurs or if something prevents the completion of the request. Otherwise, the resolved state occurs, and if the HTTP status corresponds to an error, for example 400 or 500, the ok property is set to false. Therofe you should check if promise is rejected. U-se Promise.reject() and use method catch(error)
*/

/*
### SAFETY PROBLEMS

Mistake: you're API key should't be here

Why: You can not direct import as it leads to publicly access

Solution: Credentials and keys should be in .env file

*/