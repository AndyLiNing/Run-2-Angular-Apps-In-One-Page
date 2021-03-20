# AngularElement

## Add ngx-build-plus 
## 1, "npm install ngx-build-plus -D"
## 2, "ng add ngx-build-plus": add build plus as your projects builder
## 3, Configure our build process:
    add a file at our root level, we will call this webpack.extra.js
    module.exports = {
        output: {
        jsonpFunction: 'namespacedName'
        }
    }
## 4,  ng build Angular-element --prod --extra-webpack-config webpack.extra.js
