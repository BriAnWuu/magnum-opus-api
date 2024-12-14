import { faker } from '@faker-js/faker';

const updateAuctionDate = (
    auctionData, 
    entriesToUpdate = 50, 
    dayRange = 20, 
    auctionMinDays = 5
) => {
    if (auctionData.length < entriesToUpdate) {
        console.log(`Warning! Input data length must be longer than ${entriesToUpdate}`)
        return auctionData
    }

    const sysDate = Date.now();
    const daysInMS = dayRange * 24 * 60 * 60 * 1000;
    // const days = []

    for (let i = 0; i < entriesToUpdate; i++) {
        let start, end, start_timestamp, end_timestamp;

        do {
            [ start, end ] = faker.date.betweens({ 
                from: sysDate - daysInMS, 
                to: sysDate + daysInMS,
                count: 2,
            })

            start_timestamp = new Date(start).getTime();
            end_timestamp = new Date(end).getTime();
        } while ((end_timestamp - start_timestamp) * dayRange / daysInMS  < auctionMinDays);
        
        auctionData[i].open_at = start_timestamp
        auctionData[i].close_at = end_timestamp
        
        // days.push((end_timestamp - start_timestamp) * dayRange / daysInMS)
    }

    // console.log("Average duration:")
    // console.log(days.reduce((sum, current) => sum + current, 0) / entriesToUpdate)
    // console.log(days)

    return auctionData
}

export default updateAuctionDate;