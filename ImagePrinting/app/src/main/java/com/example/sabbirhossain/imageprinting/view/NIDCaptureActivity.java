package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.ColorMatrix;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.hardware.Camera;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;

import com.example.sabbirhossain.imageprinting.R;
import com.example.sabbirhossain.imageprinting.utility.AppConstant;
import com.example.sabbirhossain.imageprinting.utility.AppUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

public class NIDCaptureActivity extends Activity {

    Button btnCapture;
    public static final String TAG = "NID CAPTURE";
    public static final String IMAGE_PATH = "imagepath";
    Context mContext;
    Camera mCamera;
    NIDCapturePreview mCameraPreview;
    RelativeLayout testLayout;

    SharedPreferences sharedPreference;
    SharedPreferences.Editor defaultSharedPreferencesEditor;
    String selectedFPDevice = "";
    String manufacturerName = "";

    @Override
    public void onBackPressed() {
        //   super.onBackPressed();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_nid_capture);
        init();
        mContext = this;
        mCamera = getCamera();
        mCameraPreview = new NIDCapturePreview(mContext, mCamera);
        testLayout = (RelativeLayout) findViewById(R.id.testLayoutInNIDCapture);
        ViewPortViewForNID testView = new ViewPortViewForNID(this);
        testView.setViewPortLayout();
        testView.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // btnCapture.performClick();
            }
        });
        testLayout.addView(testView);
        manufacturerName = Build.MANUFACTURER;

        RelativeLayout previewFrame = (RelativeLayout) findViewById(R.id.cameraInNIDCapture);
        previewFrame.addView(mCameraPreview);

        testLayout.bringToFront();

        RelativeLayout rlBottomPanel = (RelativeLayout) findViewById(R.id.rlBottomPanelInNIDCapture);
        rlBottomPanel.bringToFront();

        btnCapture.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                btnCapture.setEnabled(false);//one time click//need to implement autofocus here
                mCamera.takePicture(null, null, pictureCallback);
            }
        });

        Button btnCancel = (Button) findViewById(R.id.btnCancelInNIDCapture);

        btnCancel.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                finish();
            }
        });

    }

    Camera.PictureCallback pictureCallback = new Camera.PictureCallback() {

        @Override
        public void onPictureTaken(byte[] data, Camera camera) {
            // TODO Auto-generated method stub

            File pictureFile = AppUtils.getCroppedImageFile();

            if (pictureFile == null) {
                return;
            }

            try {
                // save image
                FileOutputStream fos = new FileOutputStream(pictureFile);
                fos.write(data);
                fos.close();

                // crop the image and return crop image location to the caller
                // activity
                ReturnActivityResult(cropImage(pictureFile.getAbsolutePath()));
                // ReturnActivityResult(pictureFile.getAbsolutePath());

            } catch (FileNotFoundException e) {
                AppUtils.PrintError("FileNotFoundException: " + e.getMessage());
            } catch (IOException e) {
                AppUtils.PrintError("IOException: " + e.getMessage());
            }

        }

    };

    public static Bitmap changeBitmapContrastBrightness(Bitmap bmp, float contrast, float brightness) {
        ColorMatrix cm = new ColorMatrix(new float[]{contrast, 0, 0, 0, brightness, 0, contrast, 0, 0, brightness, 0,
                0, contrast, 0, brightness, 0, 0, 0, 1, 0});

        Bitmap ret = Bitmap.createBitmap(bmp.getWidth(), bmp.getHeight(), bmp.getConfig());

        Canvas canvas = new Canvas(ret);

        Paint paint = new Paint();
        paint.setColorFilter(new ColorMatrixColorFilter(cm));
        canvas.drawBitmap(bmp, 0, 0, paint);

        return ret;
    }

    private String cropImage(String path) {
        Bitmap originalImage = BitmapFactory.decodeFile(path);
        Bitmap scaledImage = null;

        int oWidth = originalImage.getWidth();
        int oHeight = originalImage.getHeight();
        Log.d(TAG, "Image Height and Weight: " + oHeight + " " + oWidth);

        int dim = calculateScalingDimension(oWidth, oHeight);

        Log.d(TAG, "DIM: " + dim);

        List<Camera.Size> sizeList = mCamera.getParameters().getSupportedPreviewSizes();
        Log.d(TAG, "Height=: " + sizeList.get(0).height + "Weight=" + sizeList.get(0).width);
        if ((sizeList.get(0).height) * (sizeList.get(0).width) == 921600) {
            Log.d(TAG, "Inside dim check 921600");
            dim = dim - 90;
        } else if ((sizeList.get(0).height) * (sizeList.get(0).width) == 384000) {
            Log.d(TAG, "Inside dim check 384000");
            dim = dim - 50;
        }

		/*
         * if (oWidth > oHeight) { scaledImage =
		 * Bitmap.createScaledBitmap(originalImage, 642, 321, false); Log.d(TAG,
		 * "Scalled Image Height and Weight: " + scaledImage.getHeight() + " " +
		 * scaledImage.getWidth());
		 *
		 * } else {
		 *
		 * scaledImage = Bitmap.createScaledBitmap(originalImage,
		 * AppUtils.PHOTO_DIMENSION, dim, false); }
		 */

        Matrix matrix = new Matrix();
        if (oWidth < oHeight) {
        //    matrix.postRotate(270);//270 for walton 8b, 90 for tazpad
            if (manufacturerName.contains(AppConstant.DEVICE_NAME_ECONNECT_EH))  {
                matrix.postRotate(90);
            } else {
                matrix.postRotate(270);//270 for walton 8b, 90 for tazpad
            }


            Log.d(TAG, "In zero Degree");
        } else {

            matrix.postRotate(0);


            Log.d(TAG, "In Ninty Degree");


        }


        /*Log.d(TAG, "cropImage: 1" + originalImage.getWidth() + "*" + originalImage.getHeight());
        scaledImage = Bitmap.createScaledBitmap(originalImage,640 , 480, false);
        Log.d(TAG, "cropImage: 2" + scaledImage.getWidth() + "*" + scaledImage.getHeight());

        //Bitmap cropImage = Bitmap.createBitmap(originalImage, 0, 0, 640, 400, null, false);
        Bitmap cropImage = Bitmap.createBitmap(scaledImage, 0, 0, 640 - 20, 400, matrix, false);


        //cropImage = Bitmap.createScaledBitmap(cropImage, 800, 600, false);

        Log.d(TAG, "cropImage: 3" + cropImage.getWidth() + "*" + cropImage.getHeight());

*/

        Bitmap scalledImage = Bitmap.createScaledBitmap(originalImage, 640, 480, false);
        Log.d(TAG, "cropImage: " + scalledImage.getHeight() + scalledImage.getWidth());

        Bitmap cropImage = Bitmap.createBitmap(scalledImage, 0, 0, 600, 400, matrix, false);
        Log.d(TAG, "cropImage: " + cropImage.getHeight() + cropImage.getWidth());
        Bitmap scaledCropImage = Bitmap.createScaledBitmap(cropImage, 1366, 768, false);
        Log.d(TAG, "cropImage: " + scaledCropImage.getHeight() + scaledCropImage.getWidth());

//        Bitmap cropImage = Bitmap.createBitmap(originalImage, 0, 0, 1366, 768, matrix, false);
//
//        cropImage = Bitmap.createScaledBitmap(cropImage, 680, 480, false);
//
//        Bitmap scallingCroppedImage = Bitmap.createScaledBitmap(cropImage, 680, 480, false);

/*works on walton 8b*/

        FileOutputStream fos = null;
        try {
            File cImage = AppUtils.getCroppedImageFile();
            fos = new FileOutputStream(cImage);
            scaledCropImage.compress(Bitmap.CompressFormat.JPEG, 80, fos);

            return cImage.getAbsolutePath();

        } catch (FileNotFoundException e) {

            e.printStackTrace();

            return null;
        }
    }

    private int calculateScalingDimension(int width, int height) {

        int dim = AppUtils.PHOTO_DIMENSION;

        if (width > height) {
            // this should always be the case since we have set the
            // (width,height) to (640, 480)
            dim = (int) Math.floor((width * AppUtils.PHOTO_DIMENSION) / height);

        } else {
            dim = (int) Math.floor((height * AppUtils.PHOTO_DIMENSION) / width);
        }

        return dim;
    }

    private void init() {
        // TODO Auto-generated method stub
        btnCapture = (Button) findViewById(R.id.btnCaptureInNIDCapture);
    }

    Camera getCamera() {
        Camera camera = null;
        try {
            camera = Camera.open();
        } catch (Exception e) {
            // cannot get camera or does not exist
            Log.d(TAG, "Could not access camera");
        }
        return camera;
    }

    void ReturnActivityResult(String imagePath) {
        Intent data = new Intent();
        data.putExtra(IMAGE_PATH, imagePath);
        if (getParent() == null) {
            setResult(Activity.RESULT_OK, data);
        } else {
            getParent().setResult(Activity.RESULT_OK, data);
        }
        finish();
    }
}
