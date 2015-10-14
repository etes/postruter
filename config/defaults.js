/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "b885e23e4af74fba8a8f6008646a90b9", //"e37d8f3624734cf5ac9b7d6f4eaac75c", //"9569a8b938c746359c1b4aa490476506",
    "oauthappid": "QxKL9vhQVIRoN7z0", //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    //group: "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    "proxyurl": "./proxy.php",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you
    //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
    //default values for any items you need using the helper services and units properties.
    "queryForOrg": true,
    //If you need localization set the localize value to true to get the localized strings
    //from the javascript/nls/resource files.
    //Note that we've included a placeholder nls folder and a resource file with one error string
    //to show how to setup the strings file.
    "localize": true,
    "units": null,

    // **************************** //
    // ** UI SPECIFIC PARAMETERS ** //
    "color" : "#006190",
    "title" : "Postruter",
    /*"prompt" : "Finn adresse eller sted",*/
    "styleBasemap" : 1,
    // **************************** //

    // **************************** //
    // ** TEMPLATE PARAMETERS    ** //
    "destination" : "",
    "longitude" : null,
    "latitude": null,
    "address" : null,
    "destLayer" : null,
    "destObjectId" : null,
    "distanceUnits": "kilometers", // options: miles or kilometers
    "defaultZoomLevel" : 10,
    "basemapgroup": {"id": "de2f7dc193f34833ae2ed1143c133ce9", "title": "Bakgrunnskart-enkelt", "owner": "ermtes"},

    //Set of tools that will be added to the toolbar
    "tools": [
        {"name": "legend", "enabled": true},
        {"name": "bookmarks", "enabled": true},
        {"name": "layers", "enabled": true},
        {"name": "basemap", "enabled": true},
        {"name": "overview", "enabled": false},
        {"name": "measure", "enabled": false},
        {"name": "edit", "enabled": true, "toolbar": false},
        {"name": "print", "enabled": true, "legend": false, "layouts":false, "format":"pdf"},
        {"name": "details", "enabled": false},
        {"name": "direction", "enabled": true},
        {"name": "share", "enabled": false}
    ],
    //Set the active tool on the toolbar. Note home and locate can't be the active tool.
    //Set to "" to display no tools at startup
    "activeTool": "basemap",
    // **************************** //

    // **************************** //
    // ** UTILITY PARAMETERS     ** //
    "routeUtility" : "//kart.fredrikstad.kommune.no/arcgis/rest/services/Felles/ATPNettverk/NAServer/Route",

    // **************************** //


    //This option demonstrates how to handle additional custom url parameters. For example
    //if you want users to be able to specify lat/lon coordinates that define the map's center or
    //specify an alternate basemap via a url parameter.
    "urlItems": [
        "extent",
        "color",
        "title",
        "styleBasemap",
        "destination",
        "longitude",
        "latitude",
        "address"
    ],
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "routeTask": {
           "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    }
});
