# Expensevee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

Npm packages used:
1.ng2-charts
2.charts.js
3.ng-circle-progress
4.ng-bootstrap
5.font-awosome
6.bootstrap

Steps for user .
1. User needs to navigate to the url provided(its locally http://localhost:4200/settings)
2. Then if user visits for the 1st time then he needs to go to settings page(instruction is given on home page to go to settings page)
    Then user needs to add Total budget and categories.
3. Now user can go to home page to add expenses, he has to click on "Add Expenses" button to add expenses
4. user can edit expenses by clickng on the pencil icon on the expenses table
5. Table will have paggination enabled if expenses details crosses 3
6. user can see the budget status and categorywise spendings on the home page

7. user can delete categories by clicking on the delete icon near categories in settings page(here a confirmation popup willl be asked from the user, on clicking on 'confirm' category will be deleted)

8. user can revert back the deleted options if he wish to by clicking on the delete icon of categories that are stricked through(here a separate alert confirmation popup will be given to user, on click of "Confirm", the category will be restored)

9. Appropriate field validation is added, on violating them error mesage will be thrown and the particular input box will be highlighted with red color

10. Screenshots

![1 home_onload](https://user-images.githubusercontent.com/45401385/60766119-95de8a80-a0c2-11e9-9e4e-4ecbeca6f905.JPG)
![2 add_expenses](https://user-images.githubusercontent.com/45401385/60766120-96772100-a0c2-11e9-82d1-af880bdbbc49.JPG)
![3 settings_onload](https://user-images.githubusercontent.com/45401385/60766121-96772100-a0c2-11e9-93af-abd23c84e2b7.JPG)
![4 settings_category_without_pagination](https://user-images.githubusercontent.com/45401385/60766123-96772100-a0c2-11e9-92ca-cef461d9c76b.JPG)
![5 home_with_pieChart](https://user-images.githubusercontent.com/45401385/60766124-96772100-a0c2-11e9-83c6-20d65573755a.JPG)
![6 home_pagination_table](https://user-images.githubusercontent.com/45401385/60766125-970fb780-a0c2-11e9-8b82-41c8ef1c114f.JPG)
![7 error_page](https://user-images.githubusercontent.com/45401385/60766126-970fb780-a0c2-11e9-8a2f-56d3ec9c3066.JPG)
![8 profile](https://user-images.githubusercontent.com/45401385/60766127-970fb780-a0c2-11e9-8c7d-64c2fee8f5f2.JPG)
![9 settings_deleted_categories](https://user-images.githubusercontent.com/45401385/60766128-970fb780-a0c2-11e9-9bb1-4e162672c75b.JPG)
![10 settings_delete_confirm](https://user-images.githubusercontent.com/45401385/60766129-97a84e00-a0c2-11e9-84df-8daf289026d1.JPG)
![11 settings_undo_delete](https://user-images.githubusercontent.com/45401385/60766130-97a84e00-a0c2-11e9-9008-668302dc49e0.JPG)
![12 home_update_expenses](https://user-images.githubusercontent.com/45401385/60766506-7185ac80-a0c8-11e9-8ba1-565a80d6ac47.JPG)


