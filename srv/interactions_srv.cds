using app.interactions from '../db/interactions';
service CatalogService {
 
 entity Interactions_Header
	as projection on interactions.Interactions_Header;

 entity Interactions_Items
	as projection on  interactions.Interactions_Items;

    function sleep() returns Integer;
   function construct_array() returns {
        id : Integer
    };
    action test(value: array of String) returns array of String;

}