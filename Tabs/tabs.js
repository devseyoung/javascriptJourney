const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
        // console.log(event.currentTarget);

        // hide all tab panels
        tabPanels.forEach(panel => {
                panel.hidden = true;
        });
        // mark all tabs as unselected
        tabButtons.forEach(tab => {
                // tab.ariaSelected = false;
                tab.setAttribute('aria-selected', false);
        });

        // mark the clicked tab as selected
        event.currentTarget.setAttribute('aria-selected', true);

        // find the associated tabPanel and show it
        const { id } = event.currentTarget;

        /* 
        method 1
        const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
        console.log(tabPanel);
        tabPanel.hidden = false; 
        */

        // method 2 - find in the array of tabPanels
        console.log(tabPanels);
        const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
        tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
