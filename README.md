#lfg-imraising
This is a [NodeCG](http://github.com/nodecg/nodecg) bundle.

Listens for donations to a given account on [ImRaising](https://imraising.tv/) and emits API events for other bundles to use.

## Installation
- Install to `nodecg/bundles/lfg-imraising`
- Create `nodecg/cfg/lfg-imraising.json` with the advanced `apiKey` of the 
[ImRaising](https://imraising.tv/) account that you wish to listen to:
```json
{
  "apiKey": "xxxxx"
}
```

## Usage
### In other bundles' view pages and dashboard panels
If you would like to use this data in another bundle, add the following code to your view/panel:
```javascript
nodecg.listenFor('donation', 'lfg-imraising', callback);
```
... where 'callback' is the name of a function with the signature `function callback(data)`

### In other bundles' extensions
If you want to use tip events in another bundle's extension,
add `lfg-imraising` as a `bundleDependency` in your bundle's [`nodecg.json`](http://nodecg.com/guide/nodecg.json.html)

Then add the following code:
```javascript
var imraising = nodecg.extensions['lfg-imraising'];
imraising.on('donation', function(donation) {
    // Do your thing.
});
```

### License
lfg-imraising is provided under the MIT license, which is available to read in the [LICENSE][] file.
[license]: LICENSE
