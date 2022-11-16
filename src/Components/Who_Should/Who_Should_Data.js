
const id_maker = ()=>{
    return Math.random() * 9 **99;
  }

  
  export const Who_Should_Data = [
    {
      heading:'Delegates',
      text: [
        'We invite delegates from our extensive database of owners, directors and senior managers from Managed Service Providers (MSPs), Managed Security Service Providers (MSSPs), IT Resellers and Systems Integrators from across the UK and Europe.',

      ],
      CTA: [
        //  {
        //   text:"Register",
        //   href: "#"
        // }
      ],
      key: id_maker()
    }
    ,
    {
      heading:'Sponsors',
      text: [
        'Our event sponsors represent a broad cross section of our industry including software and hardware vendors, channel service providers, ISVs, distributors, hosting, datacenter and cloud service providers as well as leading subject matter experts that offer value to the cyber security channel community. '
      ],
      CTA: [
        {
          text:"Become A Sponsor",
          href: "/Sponsor"
        }       
       ],
      key: id_maker()
    }
  ]