// 0: IT Accessory
// 1:
// 2: 
const products = [
    {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fptc-computer.com.kh%2Fproduct-category%2Fcomputer%2Fnotebooks-tablets%2Fmacbooks%2F&psig=AOvVaw26pJqlIP5fimaWb4GcFQP-&ust=1641438396586000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKje-NjQmfUCFQAAAAAdAAAAABAD",
        name: "Mac-book",
        price: 12,
        amount: 5,
        discount: 20,
        type: 1
    },
    {
        url: "https://www.housebrand.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Z/F/ZF951-55J-001_11.jpg",
        name: "jean",
        price: 15,
        amount: 2,
        discount: 50,
        type: 1
    },
    {
        url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        name: 'halo',
        price: 13,
        amount: 23,
        discount: 40,
        type: 4
    },
    {
        url: "https://img.ltwebstatic.com/images3_pi/2020/11/03/1604382939e7ede3448062c4fc541649d210a5d7fe_thumbnail_405x552.jpg",
        name: "T-shirt",
        price: 10,
        amount: 4,
        discount: 10,
        type: 0
    },

    {
        url: "https://i.kym-cdn.com/entries/icons/facebook/000/037/984/thiccomniman.jpg",
        name: "home",
        price: 100,
        amount: 5,
        discount: 50,
        type: 2,
    },
    {
        url: "https://th.bing.com/th/id/OIP.HZyT38o4s3x_XQ32utv_HQHaFj?pid=ImgDet&w=800&h=600&rs=1",
        name: "Samsung TV",
        price: 1080,
        amount: 1,
        discount: 30,
        type: 1
    },
    {
        url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000",
        name: "Iphone 12",
        price: 1000,
        amount: 2,
        discount: 50,
        type: 2
    },
    {
        url: "https://cdn.lifehack.org/wp-content/uploads/2015/03/9780618640157_custom-s6-c30.jpg",
        name: "hell",
        price: 40,
        amount: 23,
        dicount: 20,
        type: 2,


    },
    {
        url: "https://www.romanson-cambodia.com/wp-content/uploads/2020/06/JHTCHE9AS608WH010-300x300.jpg",
        name: "Gucci",
        price: 100,
        amount: 2,
        discount: 20,
        type: 2
    },
    {
        url: "https://www.mytrendyphone.eu/images2/Orbit-Glasses-Bluetooth-Tracker-ORB523-Black-05062018-02-p.jpg",
        name: "Glasses",
        price: 13,
        amount: 50,
        discount: 60,
        type: 2
    },
    {
        url: " https://th.bing.com/th/id/R.6a22593124bda0c617a41e4dfd1f2415?rik=OolZZ4YEGvXpjQ&riu=http%3a%2f%2fwww.tandemconstruction.com%2fsites%2fdefault%2ffiles%2fstyles%2fproject_slider_main%2fpublic%2fimages%2fproject-images%2fIMG-Residence-7.jpg%3fitok%3dMIiqOVV6&ehk=QOq274LJs8kanyLkbgDG5tY%2fooDEYRLDxeww62iGBtk%3d&risl=&pid=ImgRaw&r=0",
        name: "Phirun Hotel",
        price: 100,
        amount: 2,
        discount: 15,
        type: 2,
    },
    {
        url: "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/p180x540/269919535_470885261098942_636901672368957617_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFmORVfvboGiVhYqIqECiE1WMLbquSf9ZpYwtuq5J_1moDVWyfnrdV6fQnlQIk6d_UbyH0h9n9iPfLY2bjXVwst&_nc_ohc=nkn2Wwhy40wAX9DXDBT&_nc_ht=scontent.fpnh11-1.fna&oh=00_AT8Hh8-lSvoVvV1WNGWI-TA2vOgY_tXN4-vNlaVGpeRHCQ&oe=61D97723",
        name: "Ly Heang",
        price: 1000000,
        amount: 200,
        discount: 10,
        type: 2
    },
    {
        url: "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/271193877_1120122168792062_3896552739079503057_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEcN5Fst9LMBmoUDhnl8nal-3lGRXwLj5v7eUZFfAuPmw9h5cYubVrdQLQ4hUus5hk8xZJjt0D4d3YykFlP0LO-&_nc_ohc=mCutnFTE8xMAX9ASoeC&_nc_ht=scontent.fpnh11-1.fna&oh=00_AT9uBC3IBZCuaTWauU8PpZAwvzM5eVIxNlVpCqDi86pjlQ&oe=61DA4AD9",
        name: "Chanheng Hong",
        price: 5000,
        amount: 1,
        discount: 15,
        type: 1
    },
    {
        url: "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/p180x540/269919535_470885261098942_636901672368957617_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFmORVfvboGiVhYqIqECiE1WMLbquSf9ZpYwtuq5J_1moDVWyfnrdV6fQnlQIk6d_UbyH0h9n9iPfLY2bjXVwst&_nc_ohc=nkn2Wwhy40wAX9DXDBT&_nc_ht=scontent.fpnh11-1.fna&oh=00_AT8Hh8-lSvoVvV1WNGWI-TA2vOgY_tXN4-vNlaVGpeRHCQ&oe=61D97723",
        name: "Ly Heang",
        price: 258000000,
        amount: 200,
        discount: 10,
        type: 2
    },
    {
        url: 'https://www.mydomaine.com/thmb/LhwJEsBuRKPcFOhlKbig422LrK4=/2048x1536/filters:fill(auto,1)/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg',
        name: 'Modern House',
        price: 2000000,
        amount: 1,
        discount: 30,
        type= 1,
    }

]
export { products }
//filter by price, type
//search by name