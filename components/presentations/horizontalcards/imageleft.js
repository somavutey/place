{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                          Import
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
import Paper from "@mui/material/Paper";
import {fireStore} from '../../../services/firebase'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from 'styled-components'
{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                          Image styled component
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
const Img = styled("img")({
    margin: 0,
    padding: 0,
    maxWidth: "350px",
    maxHeight: "300px",
    marginRight: '30px'

});
const HorizontalCardImageLeft = ({ url, title, id, desc, items, heartColor }) => {
    const router = useRouter();
    const viewMore = (item) => {
        localStorage.setItem('viewMore', item)
        router.push(`/Details/${id}`)

    }
    const updateHeart = async (id, updates) => {
        fireStore.collection("contents").doc(id).update(updates);

    }

    return (
        <div>
            <Paper paddingLeft={10}
                variant="outlined"
                sx={{
                    p: 2,
                    margin: "auto",
                    maxWidth: 1123,
                    flexGrow: 1,
                    borderColor: "black",
                    marginTop: 5,



                }}
                p={2}
            >
                <Grid container >
                    <Grid item xs={12} sm container justifyContent="center">
                        <Grid item >
                            <Img
                                sx={{ width: 350, height: 300, marginRight: 4 }}
                                alt="complex"
                                src={url}
                            />
                        </Grid>

                        <Grid item md xs container direction="column" spacing={2}>
                            <Grid item >
                                <Typography
                                    gutterBottom
                                    variant="subtitle1"
                                    component="div"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    gutterBottom
                                    paddingTop="50px"
                                >
                                    {desc}
                                </Typography>
                            </Grid>
                            <Grid item spacing={4}>
                                <Button
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => viewMore(items)}>See More

                                </Button>
                                <IconButton>
                                    {
                                        heartColor == "primary" ? <FavoriteIcon

                                            color={heartColor}

                                            onClick={() => updateHeart(id, { color: "secondary" })}

                                        /> : <FavoriteIcon

                                            color={heartColor}

                                            onClick={() => updateHeart(id, { color: "primary" })}

                                        />}




                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default HorizontalCardImageLeft;