

module.exports={
   
    getScheduleDateTime(notice,timeStr)
    {
        var temp_date=""
        var temp_time=timeStr
        var schedule= new Array()
        switch(notice)
        {
              case "long notice":
                temp_date=this.getLongNoticeDate().toString()
                break
              case "short notice":
                temp_date=this.getShortNoticeDate().toString()
                temp_time=this.getShortNoticeTime().toString()
                break
              case "fortnight after":
                temp_date=this.getFortnightDate().toString()
                break
              case "two hours after":
                temp_date=new Date()
                temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
                temp_time=this.getTwoHoursTime().toString()
                break
        }
        schedule.push(temp_date)
        schedule.push(temp_time)
        return schedule
    },

    getShortNoticeDate()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 23)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getShortNoticeTime()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 23)
        temp_time=temp_date.getHours()+":"+temp_date.getMinutes()
        return temp_time
    },

    getLongNoticeDate()
    {
        temp_date=new Date()
        temp_date.setDate(temp_date.getDate()+5)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getTwoHoursTime()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 2)
        temp_time=temp_date.getHours()+":"+temp_date.getMinutes()
        return temp_time
    },

    getConfirmationDate()
    {
        temp_date=new Date()
        temp_date.setDate(temp_date.getDate()+3)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getFortnightDate()
    {
        temp_date=new Date()
        temp_date.setDate(temp_date.getDate()+14)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    }

}