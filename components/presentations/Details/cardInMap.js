import { Button } from '@mui/material';
import { useRouter } from 'next/router'
import { fireStore } from '../../../services/firebase'
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from 'react'

const Img = styled("img")({
    margin: 0,
    padding: 0,
    maxWidth: "100%",
    maxHeight: "100%",
});
const ContentList = () => {
    const router = useRouter();

    const [horizontalCards, setHorizontalCards] = React.useState([])
    React.useEffect(() => {
        fireStore.collection("places").onSnapshot((snapshot) => {
            const horizontalCard = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            })
            console.log(horizontalCard);
            setHorizontalCards(horizontalCard)
        })
    }, [])

    const viewMore = (item) => {
        localStorage.setItem('viewMore', item)
        router.push(`/Details/${item.id}`)

    }
    const updateHeart = async (id, updates) => {
        fireStore.collection("places").doc(id).update(updates);

    }

    return (
        <div>
            {
                horizontalCards.map((item, index) => {
                    return (
                        <>
                            <Paper
                                variant="outlined"
                                sx={{
                                    p: 2,
                                    margin: "auto",
                                    maxWidth: 1000,
                                    flexGrow: 1,
                                    borderColor: "black",
                                    marginTop: 5,
                                }}
                                p={2}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container justifyContent="center">
                                        <Grid item sx={{ width: '100%', height: 200, margin: '0 auto' }}>
                                            <Img
                                                alt="complex"
                                                src={item.url[0]}
                                            />
                                        </Grid>

                                        <Grid item xs container direction="column" spacing={2}>
                                            <br></br>
                                            <br></br>
                                            <Grid item xs>

                                                <Typography
                                                    gutterBottom
                                                    variant="subtitle1"
                                                    component="div"
                                                    textAlign="center"
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    gutterBottom
                                                    paddingTop="20px"
                                                >
                                                    {item.desc}
                                                </Typography>
                                            </Grid>
                                            <Grid item spacing={4}>
                                                <Button
                                                    sx={{
                                                        cursor: "pointer",
                                                    }}
                                                    variant="contained"


                                                    color="primary"
                                                    onClick={() => viewMore(item)}>See More

                                                </Button>
                                                <IconButton>
                                                    {
                                                        item.color == "primary" ? <FavoriteIcon

                                                            color={item.color}

                                                            onClick={() => updateHeart(item.id, { color: "secondary" })}

                                                        /> : <FavoriteIcon

                                                            color={item.color}

                                                            onClick={() => updateHeart(item.id, { color: "primary" })}

                                                        />}




                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </>
                    )
                })
            }

        </div >
    )

}

export default ContentList;