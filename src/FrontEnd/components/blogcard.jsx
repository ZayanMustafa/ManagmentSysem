import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BlogSection = ({ courses }) => {
  return (
    <Box sx={{ px: 5, py: 6, maxWidth: "1200px", margin: "auto" }}>
      <Box display="flex" flexWrap="wrap" gap={4}>
        {courses.map((course) => (
          <Card
            key={course.id}
            sx={{ maxWidth: 345, borderRadius: 2, border: "1px solid #e0e0e0" }}
          >
            <CardMedia
              component="img"
              height="180"
              image={course.image}
              alt={course.title}
            />
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ textTransform: "uppercase" }}
              >
                {course.category}
              </Typography>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
            </CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ px: 2, py: 1 }}
            >
              <Button
                size="small"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: "none" }}
              >
                Show Saylabus
              </Button>
              <Box display="flex" alignItems="center" gap={1}>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <VisibilityIcon fontSize="small" sx={{ color: "gray" }} />
                  <Typography variant="caption" color="text.secondary">
                    {/* {course.batch} */}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Typography variant="caption" color="text.secondary">
                    {course.enrolled}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default BlogSection;
