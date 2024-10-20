export function getTimeFormat(timestamp: number) {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-GB');
    const formattedTime = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return `${formattedDate} ${formattedTime}`;
};

export function setLocalStorageFavorites(id: string): void {
    try {
        const previousIDs = localStorage.getItem('favorites');
        let existingIDs: string[] = [];

        if (!previousIDs) {
            existingIDs = [];
        } else {
            existingIDs = JSON.parse(previousIDs);
        }

        if (!existingIDs.includes(id)) {
            existingIDs.push(id);
            localStorage.setItem('favorites', JSON.stringify(existingIDs));
        }
    } catch (error) {
        console.error('Error setting favorites:', error);
    }
}

export function getLocalStorageFavorites(): string[] {
    try {
        const getIDs = localStorage.getItem('favorites');
        return getIDs ? JSON.parse(getIDs) : [];
    } catch (error) {
        console.error('Error getting favorites:', error);
        return [];
    }
}
export function removeLocalStorageFavorites(id:string):void {
    try {
        const getIDs = localStorage.getItem('favorites');
        if(getIDs&&JSON.parse(getIDs).includes(id)){
            const filteredData=JSON.parse(getIDs).filter((emailId:string)=>emailId!==id)
            localStorage.setItem('favorites',JSON.stringify(filteredData))
        }
        
    } catch (error) {
        console.error('Error getting favorites:', error);
      
    }
}

export function setLocalStorageRead(id: string) {
    try {
        const previousIDs = localStorage.getItem('read');
        let existingIDs: string[] = [];

        if (!previousIDs) {
            existingIDs = [];
        } else {
            existingIDs = JSON.parse(previousIDs);
        }

        if (!existingIDs.includes(id)) {
            existingIDs.push(id);
            localStorage.setItem('read', JSON.stringify(existingIDs));
        }
    } catch (error) {
        console.error('Error setting favorites:', error);
    }
}


export function getLocalStorageRead():string[] {
    try {
        const getIDs = localStorage.getItem('read');
        return getIDs ? JSON.parse(getIDs) : [];
    } catch (error) {
        console.error('Error getting favorites:', error);
        return [];
    }
}