package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.hardware.Camera;
import android.os.Build;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.RelativeLayout;

import com.example.sabbirhossain.imageprinting.R;
import com.example.sabbirhossain.imageprinting.utility.AppConstant;
import com.example.sabbirhossain.imageprinting.utility.AppUtils;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

/**
 * Created by Toufiq on 12/28/15.
 */
public class CustomerCaptureActivity extends Activity {
    public static final String TAG = "CustomerCaptureActivity";
    public static final String IMAGE_PATH = "imagepath";

    Context mContext;
    Camera mCamera;
    CustomerCameraPreview mCameraPreview;

    SharedPreferences sharedPreference;
    SharedPreferences.Editor defaultSharedPreferencesEditor;
    String selectedFPDevice = "";
    String manufacturerName = "";

    @Override
    public void onBackPressed() {
        // super.onBackPressed();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // TODO Auto-generated method stub
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_customer_capture);

        mContext = this;
        mCamera = getCamera();
        mCameraPreview = new CustomerCameraPreview(mContext, mCamera);
        sharedPreference = PreferenceManager.getDefaultSharedPreferences(this);
        defaultSharedPreferencesEditor = sharedPreference.edit();
        defaultSharedPreferencesEditor.commit();

        manufacturerName = Build.MANUFACTURER;

        RelativeLayout previewFrame = (RelativeLayout) findViewById(R.id.camera_previewInCustomerCapture);
        previewFrame.addView(mCameraPreview);

        // need to bring the child views infront of preview surface view
        ImageView photoGuide = ((ImageView) previewFrame
                .findViewById(R.id.image_gridInCustomerCapture));
        photoGuide.bringToFront();

        RelativeLayout rlBottomPanel = (RelativeLayout) findViewById(R.id.rlBottomPanelInCustomerCapture);
        rlBottomPanel.bringToFront();

        final Button btnCapture = (Button) findViewById(R.id.btnCaptureInCustomerCapture);
        btnCapture.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                btnCapture.setEnabled(false);
                mCamera.takePicture(null, null, pictureCallback);// one time click // need to implement autofocus here
            }
        });

        Button btnCancel = (Button) findViewById(R.id.btnCancelInCustomerCapture);
        btnCancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });


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


    Camera.PictureCallback pictureCallback = new Camera.PictureCallback() {

        @Override
        public void onPictureTaken(byte[] data, Camera camera) {
            // TODO Auto-generated method stub
            Log.d(TAG, "picture Taken: " + data.toString());
            File pictureFile = AppUtils.getImageFile();
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
                //ReturnActivityResult(pictureFile.getAbsolutePath());

            } catch (FileNotFoundException e) {
                AppUtils.PrintError("FileNotFoundException: " + e.getMessage());
            } catch (IOException e) {
                AppUtils.PrintError("IOException: " + e.getMessage());
            }

        }
    };

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
            //dim-90 this code added for remove scalling problem
            //select 720*1280 rsolution i,e 720*1280=921600
            Log.d(TAG, "Inside dim check 921600");
            dim = dim - 90;
        } else if ((sizeList.get(0).height) * (sizeList.get(0).width) == 384000) {
            //dim-50 this code added for remove scalling problem
            //select 480*800 rsolution i,e 720*1280=921600
            Log.d(TAG, "Inside dim check 384000");
            dim = dim - 50;
        }

        if (oWidth > oHeight) {
            // land

            scaledImage = Bitmap.createScaledBitmap(originalImage, dim, AppUtils.PHOTO_DIMENSION, false);
            //scaledImage = Bitmap.createScaledBitmap(originalImage, AppUtils.PHOTO_DIMENSION,AppUtils.PHOTO_DIMENSION, false);
            Log.d(TAG, "Scalled Image Height and Weight: " + scaledImage.getHeight() + " " + scaledImage.getWidth());

        } else {
            // portrait
            scaledImage = Bitmap.createScaledBitmap(originalImage, AppUtils.PHOTO_DIMENSION, dim, false);
        }

        // scale down

        // rotate and crop
        Matrix matrix = new Matrix();
        if (oWidth < oHeight) {
            // matrix.postRotate(0);

            if (manufacturerName.contains(AppConstant.DEVICE_NAME_ECONNECT_EH)) {
                matrix.postRotate(180);
            } else {
                matrix.postRotate(0);
            }


            Log.d(TAG, "In zero Degree");
        } else {

            //    matrix.postRotate(90);

            if (manufacturerName.contains(AppConstant.DEVICE_NAME_ECONNECT_EH)) {
                matrix.postRotate(0);
            } else {
                matrix.postRotate(90);
            }

            Log.d(TAG, "In Ninty Degree");


        }

        Bitmap cropImage = Bitmap.createBitmap(scaledImage, 0, 0, AppUtils.PHOTO_DIMENSION, AppUtils.PHOTO_DIMENSION, matrix, false);//matrix commented out
        Log.d(TAG, "cropImage Image Height and Weight: " + cropImage.getHeight() + " " + cropImage.getWidth());
        FileOutputStream fos = null;
        try {
            Log.d(TAG, "In Try Catch Block");
            File cImage = AppUtils.getCroppedImageFile();
            fos = new FileOutputStream(cImage);
            cropImage.compress(Bitmap.CompressFormat.JPEG, 80, fos);

            return cImage.getAbsolutePath();
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Log.d(TAG, "File Not Found Exception");
            return null;
        }
    }


    void ReturnActivityResult(String imagePath) {
        Intent data = new Intent();
        data.putExtra(CustomerCaptureActivity.IMAGE_PATH, imagePath);
        if (getParent() == null) {
            setResult(Activity.RESULT_OK, data);
        } else {
            getParent().setResult(Activity.RESULT_OK, data);
        }
        finish();
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

}
