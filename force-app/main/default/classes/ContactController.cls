global with sharing class ContactController {
    
    @RemoteAction
    global static Contact[] getContactsByName(String key) {
        String searchKey = '%' + key + '%';
        return [SELECT Id, Name, Phone FROM Contact
                   WHERE Name LIKE :searchKey
                   LIMIT 20];
    }
    
}