import { Typography, Toolbar } from "@material-ui/core";

export default function FooterBar() {
    return (
        <Toolbar>
            <Typography variant="caption" display="block">
                &copy; 2021 by <a href="mailto:gabriel_lemos06@hotmail.com">Gabriel Lemos</a>
            </Typography>
        </Toolbar>
    )
}
