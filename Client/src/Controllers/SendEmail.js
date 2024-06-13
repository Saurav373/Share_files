export const SendEmailfn = async (sender, receiver,filelink) => {


    let data = {
        service_id: 'service_cimdyzf',
        template_id: 'template_y64hh6q',
        user_id: 'ZZMXdnaZJKoHpjW-S',
        template_params: {
            sender: sender,
            receiver: receiver,
            filelink:filelink
        }
    };

    try {
        let res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return true;
    }catch(err){
        console.log(err);
        
        return false
    }
}